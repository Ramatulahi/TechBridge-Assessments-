// Define the alphabet as a string for easy indexing
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// Function to decode a sentence encoded with the Atbash cipher
function decode(sentence) {
    let decodedSentence = '';  // Initialize the variable to store the decoded sentence
    
    // Iterate through each character of the input sentence
    for (const char of sentence) {
        
        // Check if the character is an alphabetic letter (either uppercase or lowercase)
        if (/[a-zA-Z]/.test(char)) {
            const isUpperCase = char === char.toUpperCase();  // Check if the character is uppercase
            const lowerChar = char.toLowerCase();  // Convert to lowercase to handle both cases uniformly
            
            // Find the index of the character in the alphabet (using lowercase)
            const i = alphabet.indexOf(lowerChar);
            
            // If the character is found in the alphabet, decode it by reversing the index
            const decodedChar = alphabet[25 - i];  // Atbash cipher decoding: 25 - index for reversal
            
            // If the original character was uppercase, convert the decoded character to uppercase
            decodedSentence += isUpperCase ? decodedChar.toUpperCase() : decodedChar;
        } else {
            // If the character is not a letter (e.g., space, punctuation), keep it unchanged
            decodedSentence += char;
        }
    }
    
    return decodedSentence;  // Return the fully decoded sentence
}
