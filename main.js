const core = require('@actions/core')

async function add(){
    try {
        const arg1 = core.getInput('arg1')
        const arg2 = core.getInput('arg2')
        core.setOutput('result', parseInt(arg1)+parseInt(arg2))
    } catch (error) {
        core.setFailed(error)
    }
}

if (require.main === module) {
    add()
}