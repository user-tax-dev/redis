mod bin;
mod conn;
mod r#macro;
mod r#trait;

use fred::{interfaces::KeysInterface, prelude::RedisClient, types::Expiration};
use napi::bindgen_prelude::Uint8Array;
use napi_derive::napi;

use crate::{bin::Bin, r#trait::To};

#[napi]
pub struct Redis(RedisClient);

napiImpl!(

Redis :

  get(&self, key:Bin) -> Option<String> {
    self.0.get::<Option<String>, _>(key).await?
  }

  get_b(&self, key:Bin) -> Option<Uint8Array> {
    self.0.get::<Option<Vec<u8>>, _>(key).await?
  }

  set(&self, key:Bin, val:Bin) -> (){
    self.0.set::<(),_,_>(
      key,
      val,
      None,
      None,
      false
    ).await?
  }

  setex(&self, key:Bin, val:Bin, seconds:i64) -> (){
    self.0.set::<(),_,_>(
      key,
      val,
      Some(Expiration::EX(seconds)),
      None,
      false
    ).await?
  }

  expire(&self, key:Bin, seconds:i64) -> bool {
    self.0.expire::<bool,_>(
      key,
      seconds
    ).await?
  }

  del(&self, key:Bin) -> bool {
    self.0.del::<u32,_>(key).await? == 1
  }

  mdel(&self, key_li:Vec<Bin>) -> u32 {
    self.0.del::<u32,_>(key_li).await?
  }

  exist(&self, key:Bin) -> bool {
    self.0.exists::<u32,_>(key).await? == 1
  }

  mexist(&self, key:Vec<Bin>) -> u32 {
    self.0.exists::<u32,_>(key).await?
  }


);
