import { NextApiResponse, NextApiRequest } from 'next'
import { destinations } from '../../data/destinations'
import { Destination } from '../../types'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Destination[]>
) {
  return res.status(200).json(destinations)
}