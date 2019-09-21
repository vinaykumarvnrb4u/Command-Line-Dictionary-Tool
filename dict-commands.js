const chalk = require('chalk');
var inquirer = require('inquirer');
const { getDefinitionsByWordService } = require('./services/definitions');
const { getExamplesByWordService } = require('./services/examples');
const { getRandomWordService } = require('./services/randomWord');

//gets the definition details of a particular word 
const getDefinitionsByWord = (word) => {
    getDefinitionsByWordService(word).then((data) => {
        console.log(`${chalk.bold.blue('Definition of the word')} : ${chalk.bold.green(word)}`);
        data.map((def, index) => {
            console.log(`${index+1}. ${chalk.rgb(123, 45, 67).italic(def.text)}`);
        })
    }).catch(err => {
        console.log(err)
    })
}

//gets the example details of a particular word 
const getExamplesByWord = (word) => {
    getExamplesByWordService(word).then((data) => {
        console.log(`${chalk.bold.blue('Example of the word')} : ${chalk.bold.green(word)}`);
        data.examples.map((example, index) => {
            console.log(`${index+1}. ${chalk.rgb(123, 45, 67).italic(example.text)}`);
        })
    }).catch(err => {
        console.log(err)
    })
}

//gets the definitions & examples details of a particular word 
const getFullDictionaryDetails = (word) => {
    getDefinitionsByWord(word);
    getExamplesByWord(word);
}

//gets the details of the word of the day
const getWordOfDay = () => {
    getRandomWordService().then(data => {
        console.log(`${chalk.bold.redBright('Word of the Day')} : ${chalk.bold.cyanBright(data.word)}`);
        getFullDictionaryDetails(data.word);
    }).catch(err => {
        console.log(err)
    })
}

//starts the game
const playWordGame = () => {
    let word;
    getRandomWordService().then(data => {
        word = data.word;
        //console.log(`Test : ${word}`);
        getDefinitionsByWordService(data.word).then((data) => {
            if (data) {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: `${chalk.bold.magentaBright('Guess the word whose definition is ')}: ${chalk.bold.yellowBright(data[0].text)}`,
                            name: 'word'
                        }
                    ])
                    .then(answers => {
                            playAgain(word,answers.word,data,0);
                    });
            }
            else {
                playWordGame();
            }
        }).catch(err => {
            console.log(err)
        });
    }).catch(err => {
        console.log(err)
    })
}

//loops the game until the users selects to quit
const playAgain=(word,answer,data,index)=>{
    
    if(word !== answer)
    inquirer
    .prompt([
        {
            type: 'list',
            message: `${chalk.bold.redBright('wrong answer')}`,
            name: 'option',
            choices: ['try again','hint', 'quit']
        }
    ])
    .then(answers => {
        switch(answers.option){
            case 'try again': inquirer
                                .prompt([
                                    {
                                        type: 'input',
                                        message: 'Enter the answer : ',
                                        name: 'word'
                                    }
                                ])
                                .then(answers => {
                                        playAgain(word,answers.word,data,index);
                                }); 
                                break;
            case 'hint': 
                            index++;
                            if(index === data.length)
                                index=0;
                            inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    message: `${chalk.bold.magentaBright('Another definition of that word is ')} : ${chalk.bold.yellowBright(data[index].text)}`,
                                    name: 'word'
                                }
                            ])
                            .then(answers => {
                                    playAgain(word,answers.word,data,index);
                            }); 
                            break;
            case 'quit':    console.log(`${chalk.bold.magentaBright('The word is')} : ${chalk.bold.cyanBright(word)}`);
                            getFullDictionaryDetails(word);
                            break;

        }
    });
    else{
        console.log(`${chalk.bold.greenBright('Great. correct answer')}`)
    }
}


module.exports = {
    getDefinitionsByWord,
    getExamplesByWord,
    getFullDictionaryDetails,
    getWordOfDay,
    playWordGame
}


