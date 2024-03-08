pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/yourusername/yourrepo.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here, such as copying files to a server or deploying to a cloud service.
            }
        }
    }
}