# Basic Test Automation API With Atlas Id

## Introduction

        Fundamental test automation api dengan javascript
        Framework yang digunakan : Mocha dan Chai
        Reporting yang digunakan : Mochawesome

        Test berdasarkan :
        -Test Suite
        -Test Case

## Installasi

        1. Install Nodejs

            Download : https://nodejs.org/en/download/
            atau
            -clone https://github.com/coreybutler/nvm-windows/releases
            -nvm list available
            -nvm install [ versi nodejs ]
            -node -v [ cek versi nodejs ]
            -npm -v [ cek versi npm ]

        2. Install Mocha

            -npm install --global mocha [ globally ]
            -npm install --save-dev mocha [ di dalam folder project]
            -npm install mocha
            -tambahkan file package.json:
                "scripts": {
                    "test": "mocha" // nama file project
                }

            https://mochajs.org/#getting-started

        3. Install Chai

            -npm install chai

            https://www.chaijs.com/guide/installation/
            https://www.chaijs.com/

        4. Install Supertest

            -npm install supertest --save-dev

            https://www.npmjs.com/package/supertest

        5. Install Mochawesome

            -npm install --save-dev mochawesome

            https://www.npmjs.com/package/mochawesome

        6. Instal Visual Studio Code

            -https://code.visualstudio.com/download

        7. Sistem Operasi Komputer Windows 10

        8. Browser

## Program

        1. Test Suite API
        2. Test Case API
        3. Http Method [ Get, Post, Put, Delete ]
        4. Report Testing Memiliki Format Html

## Run Program
        -ubah di file package.json
        "scripts": {
            "test": "mocha test.js --reporter mochawesome --reporter-options reportDir=reports/mochawesome/  --timeout 10000",
            "test_object": "mocha ./test --recursive --reporter mochawesome --reporter-options reportDir=reports/mochawesome/  --timeout 10000"
        }
        -npm run test [ untuk menjalankan file tests ]
        -npm run test_object [ untuk menjalankan folde page object ]

# Atlas Id

## Teacher

        Teacher : Mas Genta Wibowo [ Sr Manager Test Engineer Bukalapak]

        Co-Teacher : Mas Aditya Setyadi [ SDET Lead DANA Indonesia ]

        Co-Teacher : Mas Fadly Mahendra [ Test Engineering Manager Bukalapak ]

        Co-Teacher : Mas Fatkhurozaq Budi Setyawan [ SDET Lead DANA Indonesia]

        Yuk Join belajar bareng ATLAS ID TECH


        Join :

        https://www.atlasid.tech/

        https://lnkd.in/g-j9yU8

        https://www.instagram.com/atlasid.tech/

## Source

        https://reqres.in/
        https://github.com/atlasidtech/learn-api-test-js

## Author 

        Salim Suprayogi