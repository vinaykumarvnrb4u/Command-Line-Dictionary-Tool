# Command Line Dictionary Tool

## Functionality
The command line tool has the following functionality- 

### 1. Word Definitions
Display definitions of a word. 
commands to implement this functionality:

>node dict def -w <word>
>node dict def -w=<word>
>node dict def --w <word>
>node dict def --w=<word>
>node dict def --word <word> 
>node dict def --word=<word>   

    functionality of all the above commands is the same.

### 2. Word Examples
Display examples of a word
commands to implement this functionality:

>node dict ex -w <word>
>node dict ex -w=<word>
>node dict ex --w <word>
>node dict ex --w=<word>
>node dict ex --word <word>
>node dict ex --word=<word>

    functionality of all the above commands is the same.

### 3. Word Full Dict
Display definitions & examples of a word
commands to implement this functionality:

>node dict dict -w <word>
>node dict dict -w=<word>
>node dict dict --w <word>
>node dict dict --w=<word>
>node dict dict --word <word>
>node dict dict --word=<word>
>node dict -w <word>
>node dict -w=<word>
>node dict --w <word>
>node dict --w=<word>
>node dict --word <word>
>node dict --word=<word>

    functionality of all the above commands is the same.

### 4. Word of the Day Full Dict
Display definitions & examples of word of the day
command to implement this functionality:

>node dict

### 7. Word Game
The program displays a definition and ask the user to enter the word

	If the correct word is entered, program should will that the word is correct.
	If incorrect word is entered, program should ask for
		- 1. try again
			Lets user enter word again

		- 2. hint
			Display a hint, and let user enter word again
			Hint : Displays another definition of the word.

		-3 quit
			Display the word, its full dict, and quit

commands to implement this functionality:

>node dict play



### Note
The below 2 functionalities are not implemented because the api's for this are not given.
Further /relatedWords api is returning an empty object for any word given.
 Word Synonyms
	Display synonyms of a word. 
	./dict syn <word>
 Word Antonyms
	Display antonyms of a word
	./dic ant <word>
