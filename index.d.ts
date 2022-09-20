/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export function serverCluster(hosts: Array<[string, number]>): ServerConfig
export function serverHostPort(host: string, port: number): ServerConfig
export function redisConn(version: number, server: ServerConfig, username?: string | undefined | null, password?: string | undefined | null, db?: number | undefined | null): Promise<Redis>
export class ServerConfig { }
export class Redis {
  get(key: Bin): Promise<string | null>
  getB(key: Bin): Promise<Uint8Array | null>
  set(key: Bin, val: Bin): Promise<void>
  setex(key: Bin, val: Bin, seconds: number): Promise<void>
  expire(key: Bin, seconds: number): Promise<boolean>
  del(key: Bin): Promise<boolean>
  mdel(keyLi: Array<Bin>): Promise<number>
  exist(key: Bin): Promise<boolean>
  mexist(key: Array<Bin>): Promise<number>
  hget(key: Bin, field: Bin): Promise<Uint8Array | null>
  hset(key: Bin, map: Record<string, Bin>): Promise<void>
  hincrby(key: Bin, field: Bin, increment: number): Promise<number>
  hincr(key: Bin, field: Bin): Promise<number>
  fnload(script: Bin): Promise<string>
  fbin(name: Bin, keys?: Array<Bin> | undefined | null, vals?: Array<Bin> | undefined | null): Promise<Uint8Array>
  fstr(name: Bin, keys?: Array<Bin> | undefined | null, vals?: Array<Bin> | undefined | null): Promise<string>
  fi64(name: Bin, keys?: Array<Bin> | undefined | null, vals?: Array<Bin> | undefined | null): Promise<number>
  fcall(name: Bin, keys?: Array<Bin> | undefined | null, vals?: Array<Bin> | undefined | null): Promise<void>
}
