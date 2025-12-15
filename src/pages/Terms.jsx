import React from 'react';

export default function Terms() {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white min-h-screen font-sans text-gray-800">
            <h1 className="text-3xl font-bold mb-6 border-b pb-4">이용약관 (Terms of Service)</h1>

            <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">제1조 (목적)</h2>
                <p>본 약관은 <strong>Photo Pop</strong>(이하 '서비스')이 제공하는 웹 기반 사진 촬영 서비스의 이용조건 및 절차, 이용자와 서비스의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">제2조 (서비스의 제공)</h2>
                <p>서비스는 다음과 같은 기능을 제공합니다.</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>웹캠을 이용한 실시간 사진 촬영 및 프레임 합성</li>
                    <li>촬영된 이미지의 다운로드</li>
                    <li>기타 서비스가 정하는 부가 기능</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">제3조 (저작권 및 초상권)</h2>
                <p>1. 사용자가 본 서비스를 통해 촬영한 사진의 저작권 및 초상권은 전적으로 사용자 본인에게 있습니다.</p>
                <p>2. 서비스는 사용자가 생성한 콘텐츠를 사용자의 명시적 동의 없이 서버에 저장하거나 제3자에게 제공하지 않습니다.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">제4조 (면책 조항)</h2>
                <p>본 서비스는 무료로 제공되며, 서비스 이용과 관련하여 발생하는 어떠한 문제(데이터 유실, 기기 호환성 등)에 대해서도 법적 책임을 지지 않습니다.</p>
            </section>

            <p className="text-sm text-gray-500 mt-10">본 약관은 2025년 12월 15일부터 시행됩니다.</p>
        </div>
    );
}
