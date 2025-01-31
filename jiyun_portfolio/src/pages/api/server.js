import mockData from "../../../public/mockData.json"; // JSON 직접 import

export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.status(200).json(mockData);
}
