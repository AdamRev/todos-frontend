pipeline {
  agent any
  stages {
    stage('Build Angular') {
      agent {
        docker {
          image 'node:12.18-alpine'
          args '--mount type=bind,source=/home/ec2-user/deploy,target=/build-artifacts'
        }

      }
      steps {
        sh '''npm i
npm run build
cp dist/todos-frontend/* /build-artifacts'''
      }
    }

  }
}