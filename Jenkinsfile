pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/MadanRayamajhi/madan-ci-cd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t madan-ci-cd .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop madan || true
                docker rm madan || true
                docker run -d -p 3000:3000 --name madan madan-ci-cd
                '''
            }
        }
    }
}
