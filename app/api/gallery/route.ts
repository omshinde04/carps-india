import { NextResponse } from "next/server";

export async function GET() {
    const images = [
        "/environment/carps-classroom-training-session.jpeg",
        "/environment/carps-students-learning-environment.jpeg",
        "/environment/carps-ai-training-classroom.jpeg",
        "/environment/carps-digital-marketing-training.jpeg",
        "/environment/carps-data-analytics-training-session.jpeg",
        "/environment/carps-institute-classroom-learning.jpeg",
        "/environment/carps-tech-training-students.jpeg",
        "/environment/carps-professional-skill-training.jpeg",
        "/environment/carps-corporate-readiness-session.jpeg",
        "/environment/carps-career-development-training.jpeg",
        "/environment/carps-student-training-program.jpeg",
        "/environment/carps-modern-learning-classroom.jpeg",
        "/environment/carps-tech-coaching-session.jpeg",
        "/environment/carps-students-attending-training.jpeg",
        "/environment/carps-institute-learning-environment.jpeg"
    ];

    return NextResponse.json(images);
}