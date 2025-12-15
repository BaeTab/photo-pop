import React from 'react';

export default function Privacy() {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white min-h-screen font-sans text-gray-800">
            <h1 className="text-3xl font-bold mb-6 border-b pb-4">개인정보처리방침 (Privacy Policy)</h1>

            <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">1. 개인정보의 처리 목적</h2>
                <p><strong>Photo Pop</strong>(이하 '서비스')은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>서비스 제공: 사진 촬영 및 다운로드 기능 제공</li>
                    <li>서비스 품질 향상: Google Analytics를 통한 접속 통계 분석</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">2. 처리하는 개인정보의 항목</h2>
                <p>본 서비스는 별도의 회원가입 없이 이용 가능하며, 서버에 사용자의 사진 이미지를 영구 저장하지 않습니다.</p>
                <ul className="list-disc ml-6 mt-2">
                    <li>필수항목: 접속 로그, 쿠키, 접속 IP 정보 (Google Analytics 수집)</li>
                    <li>촬영된 사진 데이터: 사용자의 브라우저 내에서만 처리되며 서버로 전송되지 않습니다. (단, 공유 기능 사용 시 일시적 저장 될 수 있음)</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">3. 쿠키(Cookie)의 운용 및 거부</h2>
                <p>서비스는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.</p>
                <p className="mt-2">이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹브라우저의 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">4. 문의처</h2>
                <p>본 서비스의 개인정보 처리와 관련하여 문의사항이 있으신 경우 아래의 연락처로 문의 주시기 바랍니다.</p>
                <p className="mt-1">Email: contact@photopop.web</p>
            </section>

            <p className="text-sm text-gray-500 mt-10">본 방침은 2025년 12월 15일부터 시행됩니다.</p>
        </div>
    );
}
