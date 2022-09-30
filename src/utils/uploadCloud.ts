import OSS from 'ali-oss';
// @ts-ignore
import S3 from 'react-aws-s3';

// 后续添加参数，切换阿里云、亚马逊云
const cloud = 'oss';

interface accessProp {
  access_key_id: string;
  access_key_secret: string;
  bucket: string;
  endpoint: string;
  expiration: string;
  security_token: string;
}

const uploadAWS = (path: string, access: accessProp, file: File) => {
  const ReactS3Client = new S3({
    bucketName: access.bucket,
    dirName: path,
    region: 'oss-cn-beijing',
    accessKeyId: access.access_key_id,
    secretAccessKey: access.access_key_secret,
  });
  return ReactS3Client.uploadFile(file, file.name);
};

const ossClient = (access: accessProp) => {
  return new OSS({
    accessKeyId: access.access_key_id,
    accessKeySecret: access.access_key_secret,
    stsToken: access.security_token,
    endpoint: access.endpoint,
    bucket: access.bucket,
    secure: true,
    timeout: 600000,
  });
};
const uploadOss = (
  path: string,
  access: accessProp,
  file: File,
  headers?: Record<string, unknown>,
) => {
  return ossClient(access).put(path, file, { headers });
};

const uploadZipOss = (name: string, access: accessProp, data: any, options: any) => {
  return ossClient(access).multipartUpload(name, data, options);
};

const oss = { clientObject: ossClient, uploadCloud: uploadOss, uploadZipFile: uploadZipOss };
const aws = { clientObject: null, uploadCloud: uploadAWS, uploadZipFile: () => {} };

export const uploadClient = cloud === 'oss' ? oss : aws;
