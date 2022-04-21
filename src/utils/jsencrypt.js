import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDPOZrLHrv/aiRhmYDDmoD5ckLm4mUzK26pMmcgcmpiQnFGUm7APUiYa9YhLPqBOplevvSUibf/uSVYUD/COdgOZDHbeqjDW3LHbOMgLHT+U3oUDiX7Ld/lzx+7DpL9fyQtHXdQOgSxnSIj1tJ/BT0I7Qa4IAA7xO5uiYYiqXZEZQIDAQAB'

const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAM85msseu/9qJGGZgMOagPlyQubiZTMrbqkyZyByamJCcUZSbsA9SJhr1iEs+oE6mV6+9JSJt/+5JVhQP8I52A5kMdt6qMNbcsds4yAsdP5TehQOJfst3+XPH7sOkv1/JC0dd1A6BLGdIiPW0n8FPQjtBrggADvE7m6JhiKpdkRlAgMBAAECgYBLC7uJT+oZh6EBT4wYSn3m2IBuCRNJQrNixwQd9hGc4B8Rroy5RfhiarszbIyT/FrKuzDsEiv2imCB6R4OAtDBTqeo/AeM/m/FE3YcuBrVR3t1Gssaz3/1p8NJBT1r3q9lHr+MmeIlak0ra2f8uGBwDyFA+w+Zt7M23VzRAN0mAQJBAOfQ9Wc0w6JkEWfyO26mOE/Hl+ystNXIlcPf6lVvXCgVf3gvGTeFunBDQfoppaZNlTe8ToRUbedyJFHeMlXmoyUCQQDk1+VpHIiDhy08oNCRodhC5X9SHgcWVHrIK6L75q0YjGIIYOwdzHCO+ck92Yll3oNPSDYA4fbRM2P9gAwi//hBAkEAtEz9IgmTA9IrC5sHCLe14q9OBeIKQKDjg1a8LzkPB4o4+6Q+S8XyTXCydz0/Psrm/VO0Cg6U8MgBYb+djNx3FQJBAJAX6VoAH21CRpewYuPwVq34t+zK/4dt9knoQB4BJ+kXK/s+nC4/Nniwi6ioOz2rmF7phyeTIMilZUaPxBSdvIECQC93OE2WlUB4RoyEoAtPeHxuDSpgCCqwCAij0ojvoQvsfvKeAQTHMuswwmd9EJCuvU1x3VE8MU7oksEfxnN5EoQ='

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}

