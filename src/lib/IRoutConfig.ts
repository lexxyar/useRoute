export type TMethod = "GET" | "PUT" | "POST" | "DELETE" | "PATCH" | "HEAD"
export default interface IRoutConfig {
    fetchUrl?: string
    fetchMethod?: TMethod
    headers?: HeadersInit
}
