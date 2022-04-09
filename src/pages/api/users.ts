import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    {id: '1', name: 'Vinicius'},
    {id: '2', name: 'Laura'},
    {id: '3', name: 'Luiza'}
  ]

  return res.json(users)
}