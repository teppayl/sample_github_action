const core = require('@actions/core')
const {Octokit} = require('@octokit/rest')

async function add(){
    try {
        const arg1 = core.getInput('arg1')
        const arg2 = core.getInput('arg2')
        const result = parseInt(arg1)+parseInt(arg2)
        console.log(core.getInput('token'))
        console.log(result)
        core.setOutput('result', result)
        console.log('test test test test test')
    } catch (error) {
        core.setFailed(error)
    }
}

const octokit = new Octokit({auth: core.getInput('token') || null})

async function test_abuse() {
    try {
        const content = octokit.repos.getContent({
            owner: "teppayl",
            repo: "test_github_action",
            path: "README.md"
        })
        console.log(content)

    } catch (error) {
        core.setFailed(error)
    }
}

if (require.main === module) {
    add()
    test_abuse()
}