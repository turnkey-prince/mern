import { PutObjectCommand, S3Client, } from "@aws-sdk/client-s3";

const client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: 'AKIA3WRSXV3MUK6CWE3Y',
        secretAccessKey: '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'
    }
});

export const uploadToS3 = async (file, fileName) => {
    const newFileName = `${Date.now()}-${fileName}`;
    const command = new PutObjectCommand({
        Bucket: "onboarding-task-images",
        Key: newFileName,
        Body: file,
    });

    try {
        await client.send(command);
        return `https://onboarding-task-images.s3.ap-south-1.amazonaws.com/${newFileName}`
    } catch (err) {
        console.log(err);
    }
};
