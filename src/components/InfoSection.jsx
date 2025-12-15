import React from 'react';

export default function InfoSection() {
    return (
        <section className="w-full max-w-4xl mt-16 p-8 bg-white/50 backdrop-blur-sm rounded-xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-gray-800 font-sans">
            <header className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-2 font-pop text-pop-pink">Photo Pop 이용 가이드</h2>
                <p className="text-gray-600">언제 어디서나 즐기는 나만의 온라인 포토부스</p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                <article>
                    <h3 className="text-xl font-bold mb-3 border-b-2 border-pop-yellow inline-block">📸 서비스 소개</h3>
                    <p className="mb-4 leading-relaxed">
                        <strong>Photo Pop</strong>은 웹캠을 사용하여 간편하게 4컷 사진을 찍고 꾸밀 수 있는 무료 웹 애플리케이션입니다.
                        복잡한 설치 없이 브라우저만 있다면 PC와 모바일 어디서든 인생 사진을 남길 수 있습니다.
                        친구, 연인, 가족과 함께 소중한 순간을 기록해보세요.
                    </p>
                </article>

                <article>
                    <h3 className="text-xl font-bold mb-3 border-b-2 border-pop-cyan inline-block">✨ 주요 기능</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                        <li><strong>실시간 미러링:</strong> 거울을 보는 것처럼 자연스러운 모습으로 촬영</li>
                        <li><strong>자동 타이머:</strong> 3초 카운트다운으로 여유로운 포즈 준비</li>
                        <li><strong>다양한 레이아웃:</strong> 1x4 세로형, 2x2 그리드, 믹스, 가로형 등 제공</li>
                        <li><strong>필터 & 프레임:</strong> 감성적인 필터와 다채로운 프레임 색상 조합</li>
                        <li><strong>고화질 다운로드:</strong> 꾸민 사진을 PNG 파일로 즉시 저장</li>
                    </ul>
                </article>

                <article>
                    <h3 className="text-xl font-bold mb-3 border-b-2 border-pop-pink inline-block">💡 촬영 꿀팁</h3>
                    <ul className="list-disc list-inside space-y-2 leading-relaxed">
                        <li>조명이 밝은 곳에서 촬영하면 화질이 훨씬 좋아집니다.</li>
                        <li>카메라 렌즈를 정면으로 응시하면 아이컨택이 자연스러워요.</li>
                        <li>'가로형(Row)' 레이아웃은 단체 사진 촬영에 추천합니다!</li>
                        <li>다양한 소품을 활용하여 더욱 재미있는 사진을 연출해보세요.</li>
                    </ul>
                </article>

                <article>
                    <h3 className="text-xl font-bold mb-3 border-b-2 border-gray-800 inline-block">📝 이용 약관 및 정보</h3>
                    <p className="mb-2 leading-relaxed">
                        본 서비스는 사용자의 이미지를 서버에 저장하지 않고 브라우저 내에서만 처리하므로
                        개인정보 유출 걱정 없이 안전하게 이용하실 수 있습니다.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        © 2025 Photo Pop. All rights reserved.<br />
                        Contact: b_h_woo@naver.com
                    </p>
                </article>
            </div>

            <div className="mt-8 text-center text-sm text-gray-400">
                <p>무료 온라인 사진관 | 인생네컷 만들기 | 웹캠 스티커 사진</p>
            </div>
        </section>
    );
}
