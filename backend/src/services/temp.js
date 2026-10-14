const resume = `ARJUN MEHTA

Software Engineer
Bangalore, India

PROFESSIONAL SUMMARY

Software engineer with 2 years of experience building web applications and data-driven products. Experienced in backend development, cloud infrastructure, database systems, and applied machine learning. Strong interest in scalable distributed systems and developer tools.

EDUCATION

B.Tech in Computer Science and Engineering
National Institute of Technology, Surat
2021 - 2025

CGPA: 8.6/10

TECHNICAL SKILLS

Languages: Python, Java, TypeScript, SQL, Go

Frontend: React, Next.js, Tailwind CSS

Backend: FastAPI, Django, Node.js, Express

Databases: PostgreSQL, MySQL, MongoDB, Redis

Cloud & Infrastructure: AWS, Docker, Kubernetes, Terraform

Machine Learning: PyTorch, Scikit-learn, Pandas, NumPy

Tools: Git, GitHub Actions, Linux, Grafana, Prometheus

WORK EXPERIENCE

Software Engineer - CloudNova Technologies
Bangalore, India
July 2025 - Present

- Developed REST and GraphQL APIs using Python and FastAPI.
- Designed PostgreSQL schemas for high-volume transactional workloads.
- Built asynchronous processing systems using Redis and Celery.
- Containerized services using Docker and deployed applications using Kubernetes.
- Implemented automated CI/CD pipelines using GitHub Actions.
- Improved API response times by approximately 35% through database optimization and caching.

Software Engineering Intern - DataForge Labs
Pune, India
January 2025 - June 2025

- Built internal dashboards using React and TypeScript.
- Developed data-processing pipelines using Python and Pandas.
- Created automated testing infrastructure for backend services.
- Assisted in migrating legacy services from a monolithic architecture to microservices.

PROJECTS

Real-Time Fraud Detection System

- Developed a machine-learning system for detecting potentially fraudulent financial transactions.
- Trained classification models using Scikit-learn.
- Processed transaction data using Pandas and NumPy.
- Created a FastAPI service for real-time model inference.
- Used Redis for temporary feature storage.
- Containerized the application using Docker.

Distributed File Processing Platform

- Built a system for processing large files asynchronously.
- Developed worker services using Go.
- Used RabbitMQ for message delivery.
- Stored metadata in PostgreSQL.
- Implemented authentication and role-based access control.
- Added monitoring using Prometheus and Grafana.

ACHIEVEMENTS

- Winner - University Hackathon 2024
- AWS Certified Cloud Practitioner
- Ranked in the top 10% of university programming competition
- Published technical article on distributed task processing

INTERESTS

Distributed systems, cloud computing, machine learning infrastructure, backend engineering, and developer productivity.`

const selfDescription = `My name is Arjun Mehta, and I am a software engineer interested in backend development, cloud infrastructure, and machine learning systems.

I enjoy working on problems involving scalability, distributed processing, and reliable software architecture. My primary programming languages are Python, TypeScript, Java, and Go.

I have experience developing APIs, designing databases, building asynchronous processing systems, and deploying containerized applications. I have worked with technologies such as FastAPI, Django, PostgreSQL, Redis, Docker, Kubernetes, and AWS.

I am particularly interested in the intersection of software engineering and machine learning. Rather than focusing only on model development, I enjoy building the infrastructure required to serve machine-learning models reliably in production.

Outside of technical work, I enjoy competitive programming, reading about distributed systems, and experimenting with small software projects that automate repetitive tasks.

My long-term goal is to work on large-scale engineering systems where software infrastructure, cloud computing, and machine learning come together.`


const jobDescription = `MACHINE LEARNING PLATFORM ENGINEER

ABOUT THE ROLE

We are seeking a Machine Learning Platform Engineer to help develop the infrastructure used to train, deploy, monitor, and operate machine-learning systems at scale.

RESPONSIBILITIES

- Build scalable APIs and backend services for machine-learning applications.
- Develop infrastructure for model training and deployment.
- Design data pipelines for large datasets.
- Build distributed processing systems for machine-learning workloads.
- Deploy services using Docker and Kubernetes.
- Monitor production systems and investigate performance issues.
- Collaborate with data scientists and software engineers.
- Develop internal tools that improve the machine-learning development lifecycle.

REQUIRED QUALIFICATIONS

- Strong programming skills in Python.
- Experience with backend frameworks such as FastAPI or Django.
- Strong understanding of SQL and relational databases.
- Experience with Docker.
- Familiarity with cloud platforms such as AWS or GCP.
- Understanding of machine-learning fundamentals.
- Experience with Git and CI/CD.
- Knowledge of distributed systems and asynchronous processing.

PREFERRED QUALIFICATIONS

- Experience with Kubernetes.
- Experience with PyTorch or TensorFlow.
- Knowledge of Redis, Kafka, or RabbitMQ.
- Experience building model-serving APIs.
- Familiarity with Terraform.
- Experience with monitoring tools such as Prometheus and Grafana.
- Understanding of GPU-based machine-learning workloads.

EDUCATION

Bachelor's or Master's degree in Computer Science, Engineering, Mathematics, or a related field.

LOCATION

Bangalore, India

EMPLOYMENT TYPE

Full-time`


module.exports = {
    resume, selfDescription, jobDescription
}

