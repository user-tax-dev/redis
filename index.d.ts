/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
export function serverCluster(hosts: Array<[string, number]>): ExternalObject<ServerConfig>
export function serverHostPort(host: string, port: number): ExternalObject<ServerConfig>
export function redisConn(version: number, server: ExternalObject<ServerConfig>, username?: string | undefined | null, password?: string | undefined | null, db?: number | undefined | null): Promise<Redis>
export class Redis {
  get(key: Bin): Promise<string | null>
  getB(key: Bin): Promise<Uint8Array | null>
  set(key: Bin, val: Bin): Promise<void>
  del(key: Bin): Promise<boolean>
  mdel(keyLi: Array<Bin>): Promise<number>
}
