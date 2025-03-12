

export default function PostDetail() {
    return <>
    <div className="post__detail">
        <div className="post__box">
            <div className="post__title">
                여기는 내용이예요
            </div>
            <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">작성자</div>
                <div className="post__date">2025.03.13 토요일</div>
            </div>
            <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
            </div>            
            <div className="post__text">
                text test
            </div>
        </div>
    </div>
    </>
}