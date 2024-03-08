pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/vuaavan/cicd.git'
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

    }
}
