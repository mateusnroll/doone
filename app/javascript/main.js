import { Application } from 'stimulus'

import { TaskController } from 'task_controller'

const application = Application.start()
application.register('task', TaskController)


console.log('i am working! loko')
