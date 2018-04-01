export interface User {
  firstName: string,
  lastName: string,
  email: string, // no question mark means required
  isActive?: boolean, // ? marks makes data optional
  registered?: any,
  hide?: boolean
}