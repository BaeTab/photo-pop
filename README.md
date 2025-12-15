# 📸 Photo Pop

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

**Photo Pop**은 별도의 앱 설치 없이 웹 브라우저에서 바로 즐길 수 있는 **온라인 인생네컷 포토부스**입니다.  
웹캠을 이용하여 4컷 사진을 촬영하고, 다양한 프레임과 필터로 꾸며 나만의 추억을 남기세요!

👉 **Live Demo:** [https://photo-ppop.web.app](https://photo-ppop.web.app)

---

## ✨ 주요 기능 (Key Features)

*   **⚡ 설치 없는 웹 실행**: PC, 모바일 어디서든 URL 접속만으로 즉시 촬영 가능
*   **📸 자동 4컷 촬영**: 3초 타이머와 함께 자동으로 4장의 사진을 연속 촬영 (셔터음 & 플래시 효과 포함)
*   **🎨 실시간 꾸미기**:
    *   **프레임 컬러**: 화이트, 핑크, 시안, 라임 등 다양한 배경색 선택
    *   **필터 효과**: 흑백, 세피아, 밝게 등 감성 필터 적용
    *   **레이아웃**: 1x4(세로), 2x2(격자), Mixed, Split 등 다양한 컷 분할 지원
*   **💾 고화질 다운로드**: 완성된 사진을 PNG 파일로 즉시 저장
*   **🔄 초기화 기능**: 마음에 들지 않으면 언제든 다시 찍기 가능

## 🛠 기술 스택 (Tech Stack)

*   **Frontend**: React 19, Vite
*   **Styling**: TailwindCSS (v4)
*   **Camera & Image**: `react-webcam`, `html-to-image`
*   **Routing**: React Router Dom
*   **Deployment**: Firebase Hosting
*   **Analytics**: Google Analytics 4

## 🚀 시작하기 (Getting Started)

### 로컬 개발 환경 설정 (Local Development)

```bash
# 1. 저장소 클론
git clone https://github.com/BaeTab/photo-pop.git

# 2. 프로젝트 폴더로 이동
cd photo-pop

# 3. 패키지 설치
npm install

# 4. 개발 서버 실행
npm run dev
```

### 배포 (Deployment)

이 프로젝트는 Firebase Hosting을 사용합니다.

```bash
# 빌드 및 배포 (스크립트 설정됨)
npm run deploy
```

## 📂 프로젝트 구조 (Project Structure)

```
photo-pop/
├── public/              # 정적 파일 (favicon, robots.txt, sitemap.xml)
├── src/
│   ├── components/      # UI 컴포넌트 (CameraStage, PhotoFrame, ControlBar)
│   ├── hooks/           # 커스텀 훅 (useSound)
│   ├── pages/           # 페이지 컴포넌트 (Privacy, Terms)
│   ├── App.jsx          # 라우터 설정 및 레이아웃
│   ├── firebase.js      # Firebase 초기화 설정
│   └── main.jsx         # 진입점
├── firebase.json        # 호스팅 설정
└── README.md            # 프로젝트 문서
```

## 📝 라이선스 (License)

This project is licensed under the MIT License.

## 📞 문의 (Contact)

기능 제안이나 버그 리포트는 이슈를 등록해주세요.
*   Email: contact@photopop.web

---
Copyright © 2025 Photo Pop. All rights reserved.
