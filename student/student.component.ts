import { Component } from "@angular/core";
import { IStudent } from "./IStudent";

@Component({
    selector: 'sw-student',
    templateUrl: './student.component.html'
})
export class StudentComponent {
    student: IStudent
    students: IStudent[]
    imgmaxwidth: number
    imgmaxheight: number
    constructor() {
        this.imgmaxwidth = 100
        this.imgmaxheight = 100

        this.student = {
            rollNo: 101,
            name: "Sid",
            cgpa: 8,
            picture: 'assets/abc.jpg'
        }

        this.students = [
            { rollNo: 102, name: "a", cgpa: 8.7, picture: 'assets/abc.jpg' },
            { rollNo: 103, name: "b", cgpa: 8.8, picture: 'assets/abc.jpg' },
            { rollNo: 104, name: "c", cgpa: 8.9, picture: 'assets/abc.jpg' },
            { rollNo: 105, name: "d", cgpa: 9.0, picture: 'assets/abc.jpg' },
            { rollNo: 106, name: "e", cgpa: 9.2, picture: 'assets/abc.jpg' },
        ]
    }
    changeColor = function (cgpa: number) {
        if (cgpa > 7) {
            return "green"
        }
        return "red"
    }
}