function longestSubstring(value: string) {

    let characters = value.split('');
    let currentCharacter;
    let text = "";
    let longestString = "";
    let hash = {};

    for (let i = 0; i < characters.length; i++) {

        currentCharacter = characters[i];

        if (!hash[characters[i]]) {

            text += currentCharacter;

            hash[characters[i]] = { index: i };

        }

        else {

            if (longestString.length <= text.length) {

                longestString = text;
            }

            let previousIndex = hash[currentCharacter].index,
                fromPreviousIndex = value.substring(previousIndex + 1, i);

            text = fromPreviousIndex + currentCharacter;

            hash = {};

            for (let j = previousIndex + 1; j <= i; j++) {

                hash[value.charAt(j)] = { index: j };

            }

        }

    }

    return longestString.length > text.length ? longestString : text;

} 