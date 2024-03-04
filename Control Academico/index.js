import { initServer } from "./configs/app.js"
import { connect } from "./configs/mongo.js"
import { defaultCourse } from "./src/course/course.controller.js"

initServer()
connect()

defaultCourse()
