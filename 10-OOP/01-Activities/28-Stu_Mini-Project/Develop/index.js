const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.run();



class Components {
      constructor(children) {
            if(!children) {
                  return []
            }
      }

      render() {
            throw new Error('Child class must implement render() method.');
      }

      renderInnerHTML() {

      }
}

class Header extends Components {
      super()
      render() {
            return  `<header class="header"><h1>Todo Today</h1><p>${DATE_HERE}</p></header>`
      }
}

class TaskListItem extends Components {
      render(){
            return `<li class="tasks-item">${INNER_HTML}</li>`;
      }
}

class TaskList extends Components {
      render(){
            return `<ul class="tasks">{INNER_HTML}</ul>`;
      }
}