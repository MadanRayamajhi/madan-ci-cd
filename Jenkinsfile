pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t madan-ci-cd .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop madan || true'
                sh 'docker rm madan || true'
                sh 'docker run -d -p 3000:3000 --name madan madan-ci-cd'
            }
        }
    }
}
