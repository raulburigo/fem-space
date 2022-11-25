import { NextApiRequest, NextApiResponse } from 'next'
import { destinations } from '../../../data/destinations'
import { Destination } from '../../../types'


type ResponseError = {
  message: string
}

export default function destinationHandler(
  req: NextApiRequest,
  res: NextApiResponse<Destination | ResponseError>
) {
  const { query } = req
  const { name } = query
  const filtered = destinations.filter((d) => d.name.toLowerCase() === name)

  // User with id exists
  return filtered.length > 0
    ? res.status(200).json(filtered[0])
    : res.status(404).json({ message: `Destination: ${name} not found.` })
}