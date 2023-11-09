const URL = "/api/v1/admin"

export async function getUsersLoaders () {
    const response = await fetch(`${URL}/users`)
    const users = await response.json()
    console.log(users)
    return { users }
}

export async function  getUserById ({params}) {
    const response = await fetch(`${URL}/user/${params.id}`)
    const userObj = await response.json()
    return { userObj }
}

export async function getContractorsLoaders () {
    const response = await fetch(`${URL}/contractors/info`)
    const contractors = await response.json()
    return { contractors }
}

export async function getContractorById ({params}) {
    const response = await fetch(`${URL}/contractor-info/${params.id}`)
    const contractorObj = await response.json()
    return { contractorObj }
}