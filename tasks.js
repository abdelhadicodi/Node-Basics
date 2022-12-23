
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n') {
    quit();
  }
  else if(text === 'hello\n' || text.split(" ")[0] === 'hello'){
    hello(text);
  }
  else if (text === 'exit\n'){
    quit();
  }
  else if (text === 'help\n'){
    help();
  }
  else if (text === 'list\n'){
    lists(text);
  }
  else{
    unknownCommand(text);
  }
}
// "help" is using to help you knowing what each command does
function help(help){
  for (var i=0; i<commands.length; i++){
    console.log(commands[i]);
  }
  

}
var commands = [`hello: to say hello`, `exit and quit: to exit the application`, `help: to list the commands` ]


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  if(text === 'hello\n') {
    console.log("hello!")
  }
  else {
    text = text.replace('\n', '').trim();
  const words = text.split(' ');
  if(words[0] === 'hello') {
    const variable = words.slice(1).join(' ');
    console.log(`hello ${variable}!`);
  }
  
  }
}
// list all tasks
let list=["exit", "quit", "say hello"]
function lists(){
    for (var i=0 ; i<list.length; i++){
      console.log(`${i + 1}- ${list[i]}`);
    }
}



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Abdelhadi arab")
