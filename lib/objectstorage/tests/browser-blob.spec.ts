// import { expect } from "chai";
// import { BrowserBlob } from "../lib/upload-manager/browser-blob";

// const CHUNK_SIZE = 20 * 1024 * 1024;
// const BLOB_TEXT = "This is sample file for upload manager unit tests";

// describe("Test Browser Blob ", () => {
//   const blob: BrowserBlob = new BrowserBlob(new Blob([BLOB_TEXT]), CHUNK_SIZE);

//   it("should return correct MD5 hash for the Blob ", async function() {
//     expect(await blob.getMD5Hash()).equals("1B2M2Y8AsgTpgAmY7PhCfg==");
//   });

//   it("should return correct Data for the Blob ", async function() {
//     const fileReader = new FileReader();
//     fileReader.onload = () => {
//       expect(fileReader.result as string).equals(BLOB_TEXT);
//     };
//     const data = await blob.getData();
//     fileReader.readAsText(data);
//   });
// });
