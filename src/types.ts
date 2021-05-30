export default {
  Address: "MultiAddress",
  LookupSource: "MultiAddress",
  AccountInfo: "AccountInfoWithDualRefCount",
  OrgId: "AccountId",
  PropName: "Vec<u8>",
  PropValue: "Vec<u8>",
  Property: {
    name: "PropName",
    value: "PropValue"
  },
  Organization: {
    id: "AccountId",
    name: "Vec<u8>",
    description: "Vec<u8>",
    admin: "AccountId",
    website: "Vec<u8>",
    email: "Vec<u8>",
    suspended: "bool",
    props: "Option<Vec<Property>>"
  },
  CertId: "[u8; 32]",
  IssuedId: "[u8; 11]",
  CertDetail: {
    name: "Vec<u8>",
    description: "Vec<u8>",
    org_id: "AccountId",
    signer_name: "Option<Text>"
  },
  CertProof: {
    cert_id: "CertId",
    human_id: "Vec<u8>",
    recipient: "Vec<u8>",
    time: "Moment",
    expired: "Option<Moment>",
    revoked: "bool",
    props: "Option<Vec<Property>>"
  },
  ProductId: "Vec<u8>",
  Product: {
    id: "ProductId",
    owner: "AccountId",
    props: "Option<Vec<Property>>",
    registered: "Moment"
  },
  Identifier: "Vec<u8>",
  Decimal: "i32",
  TrackingId: "Identifier",
  TrackingEventIndex: "u128",
  DeviceId: "Identifier",
  Year: "u32",
  TrackingStatus: "Vec<u8>",
  Track: {
    id: "TrackingId",
    owner: "AccountId",
    status: "TrackingStatus",
    products: "Vec<ProductId>",
    registered: "Moment",
    updated: "Option<Moment>",
    parent_id: "TrackingId",
    props: "Option<Vec<Property>>"
  },
  TrackingEventType: {
    _enum: ["TrackingRegistration", "TrackingUpdateStatus", "TrackingScan", "TrackingDeliver"]
  },
  TrackingEvent: {
    event_type: "TrackingEventType",
    shipment_id: "TrackingId",
    location: "Option<ReadPoint>",
    readings: "Vec<Reading<Moment>>",
    status: "TrackingStatus",
    timestamp: "Moment",
    props: "Option<Vec<Property>>"
  },
  ReadPoint: {
    latitude: "Decimal",
    longitude: "Decimal"
  },
  ReadingType: {
    _enum: ["Humidity", "Pressure", "Shock", "Tilt", "Temperature", "Vibration"]
  },
  Reading: {
    device_id: "DeviceId",
    reading_type: "ReadingType",
    timestamp: "Moment",
    value: "Decimal"
  }
};
