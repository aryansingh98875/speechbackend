"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors'
const db_1 = __importDefault(require("./lib/db"));
const app = (0, express_1.default)();
// app.use(express.json());
// app.use(cors());
// import studentRoutes from './routes/studentAuthRoutes'
// import levelRoutes from './routes/levelRoutes'
// import testRoutes from './routes/testRoutes';
// import getStudentRoutes from './routes/getStudentRoutes'
// import getSpecificStudent from './routes/gettSpecificStudents'
// import LevelSpecific from './routes/LevelDataRoutes'
// import FormRoute from './routes/FormRoutes'
const port = Number(process.env.PORT || 8081);
// import teacherLogin from './routes/teacherAuthRouter'
// app.use('/api/v1/student',studentRoutes);
// app.use('/api/v1/level',levelRoutes);
// app.use('/api/v1/test',testRoutes);
// app.use('/api/v1/data',getStudentRoutes );
// // app.use('/api/v1/data/specific',getSpecificStudent);
// app.use('/api/v1/level/data',LevelSpecific);
// app.use('/api/v1/studentDetails',FormRoute);
// app.use('/api/v1/teacher',teacherLogin)
app.get('/', (req, res) => {
    res.json({
        message: "Siyonara World"
    });
});
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield db_1.default.student.count();
    res.json({
        count: users
    });
}));
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
