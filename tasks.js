
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
function startApp(name) {
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
  else if (text === 'hello\n' || text.split(" ")[0] === 'hello') {
    hello(text);
  }
  else if (text === 'exit\n') {
    quit();
  }
  else if (text === 'help\n') {
    help();
  }
  else if (text === 'list\n') {
    lists(text);
  }
  else if (text.startsWith('add')) {
    add(text);
  }
  else if (text.split(" ")[0] === 'remove' || text === 'remove\n') {
    remove(text);
  }
  else if (text.split(" ")[0] === 'edit' || text === `edit\n`) {
    edit(text);
  }
  else {
    unknownCommand(text);
  }
}
// "help" is using to help you knowing what each command does
function help(help) {
  for (var i = 0; i < commands.length; i++) {
    console.log(commands[i]);
  }


}
var commands = [`hello: to say hello`,
  `exit and quit: to exit the application`,
  `help: to list the commands`,
  `list: to show your tasks`,
  `add: to add a task`,
  `remove: to remove a task`,
  `edit: to edit in the task`,
]


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  if (text === 'hello\n') {
    console.log("hello!")
  }
  else {
    text = text.replace('\n', '').trim();
    const words = text.split(' ');
    if (words[0] === 'hello') {
      const variable = words.slice(1).join(' ');
      console.log(`hello ${variable}!`);
    }

  }
}
// list all tasks
let list = []
function lists() {
  for (var i = 0; i < list.length; i++) {
    console.log(`${i + 1}- ${list[i]}`);
  }
}
// add command
function add(task) {
  task = task.trim().split(" ")[1]
  if (task == undefined) {
    console.log("please enter a valid task")
  }
  else {
    list.push(task)
  }
}
// remove command
function remove(remove) {
  if (remove === 'remove\n') {
    return list.pop();
  } else {
    remove = remove.replace('\n', '').trim()
    remove = parseInt(remove.split(" ").slice(1).join(' '));
    list.splice(remove - 1, 1);
    if (remove > list.length) { console.log("number does not exist") }
  }
}
// edit command
function edit(text) {
  if (text === 'edit\n') {
    console.log("error");
    return
  }
  text = text.replace('\n', '').trim();
  const words = text.split(' ');
  if (words[0] === "edit") {
    const a = words.slice(1).join(" ")
    if (typeof parseInt(a[0]) === "number" && a[1] === " ") {
      list.splice(`${a[0] - 1}`, 1, a.slice(2))
    } else {
      list.splice(-1,1,a.slice(0))
    }
  }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Abdelhadi arab")
