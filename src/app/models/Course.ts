export interface ICourse{
  _id: string
  name: string,
  description: string,
  members_ids: string[],
  content_ids: string[],
  authors_ids: string[]
}
