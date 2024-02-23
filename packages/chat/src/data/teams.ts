import { apiCall } from '../utils/networking'
import { ITeam } from '../types'
import { isTeam, isTypedArray } from '../type-guards'

let cachedAllTeamsList: Promise<ITeam[]>

export async function getAllTeams(): Promise<ITeam[]> {
  if (typeof cachedAllTeamsList === 'undefined')
    cachedAllTeamsList = apiCall('teams').then((responseData) => {
      if (!isTypedArray(responseData, isTeam))
        throw new Error('Invalid team data received')
      return responseData
    })
  return await cachedAllTeamsList
}

const cachedTeamRecords = {}

export async function getTeamById(id: string): Promise<ITeam>  {
  let cached = cachedTeamRecords[id]
  if (typeof cached === 'undefined')
    cached = cachedTeamRecords[id] = apiCall(`teams/${id}`)
  return await cached
}
