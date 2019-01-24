import React, { Component } from 'react';
import './center.scss';
class center extends Component {
  state = {
    content: ['10,000', '38,000', '152,000'],
    unit: '월',
    curTab: 'month',
    curColor: 'advanced',
  };
  handleChangeUnit = e => {
    if (e.target.id === 'month') {
      this.setState({
        content: ['10,000', '38,000', '152,000'],
        unit: '월',
        curTab: 'month',
      });
    } else {
      this.setState({
        content: ['8,000', '23,000', '132,000'],
        unit: '년',
        curTab: 'year',
      });
    }
  };
  ChangeHover = type => e => {
    console.log(e.target.id);
    if (type === 'basic') {
      this.setState({
        curColor: 'basic',
      });
    } else if (type === 'advanced') {
      this.setState({
        curColor: 'advanced',
      });
    } else if (type === 'professional') {
      this.setState({
        curColor: 'professional',
      });
    } else if (type === 'solutions') {
      this.setState({
        curColor: 'solutions',
      });
    }
  };
  ChangeOut = e => {
    // console.log(e.target);
    console.log('id:', e.target.id);
    this.setState({
      curColor: '',
    });
  };

  render() {
    return (
      <div className="center">
        <div className="centertop">
          <div className="centerButton">
            <button
              className={[
                'centerButtonOne',
                this.state.curTab === 'month' ? 'active' : null,
              ].join(' ')}
              id="month"
              onClick={this.handleChangeUnit}>
              월 (Month)
            </button>
            <button
              className={[
                'centerButtonOne',
                this.state.curTab === 'year' ? 'active' : null,
              ].join(' ')}
              id="year"
              onClick={this.handleChangeUnit}>
              년 (Year)
            </button>
          </div>
          <div className="centerMain">
            <div
              className={[
                'basic element borderLine',
                this.state.curColor === 'basic' ? 'active' : null,
              ].join(' ')}
              onMouseOver={this.ChangeHover('basic')}
              onMouseOut={this.ChangeOut}>
              <div className="topElement">
                <div className="basicTitle">Basic</div>
                <div className="money">
                  ￦{this.state.content[0]}
                  <span className="month">/{this.state.unit}</span>
                </div>
                <button className="clickButtonBasic">결제하기</button>
              </div>
              <div className="info">
                <ul>
                  <li>Free +</li>
                  <li>전자계약 8건/월</li>
                  <li>개인신분인증(한·중)</li>
                  <li>서명요청 알람(SMS·카카오톡)</li>
                  <li>클라우드 저장 및 공유</li>
                </ul>
              </div>
            </div>
            <div className="rightBorder" />
            <div
              onMouseOver={this.ChangeHover('advanced')}
              onMouseOut={this.ChangeOut}
              className={[
                'advanced element borderLine',
                this.state.curColor === 'advanced' ? 'active' : null,
              ].join(' ')}>
              <div className="topElement">
                <div className="advancedTitle">Advanced</div>
                <div className="money">
                  ￦{this.state.content[1]}
                  <span className="month">/{this.state.unit}</span>
                </div>
                <button className="clickButtonAdvanced">결제하기</button>
              </div>
              <div className="info">
                <ul>
                  <li>Basic +</li>
                  <li>무제한 전자계약</li>
                  <li>계약 메일 디자인 커스텀</li>
                  <li>스마트 계약서 분류</li>
                  <li>일괄 서명</li>
                  <li>클립보드</li>
                </ul>
              </div>
            </div>
            <div className="rightBorder" />
            <div
              onMouseOver={this.ChangeHover('professional')}
              onMouseOut={this.ChangeOut}
              className={[
                'professional element borderLine',
                this.state.curColor === 'professional' ? 'active' : null,
              ].join(' ')}>
              <div className="topElement">
                <div className="professionalTitle">Professional</div>
                <div className="money">
                  ￦{this.state.content[2]}
                  <span className="month">/{this.state.unit}</span>
                </div>
                <button className="clickButtonProfessinal">결제하기</button>
              </div>
              <div className="info">
                <ul>
                  <li>Advanced +</li>
                  <li>기업 전용 페이지 설정</li>
                  <li>기업 URL 제공</li>
                  <li>기업 관리자 페이지</li>
                </ul>
              </div>
            </div>
            <div className="rightBorder" />
            <div
              onMouseOver={this.ChangeHover('solutions')}
              onMouseOut={this.ChangeOut}
              className={[
                'solutions element borderLine',
                this.state.curColor === 'solutions' ? 'active' : null,
              ].join(' ')}>
              <div className="topElement">
                <div className="solutionsTitle">Solutions</div>
                <div className="moneysolutions">별도 문의</div>
                <button className="clickButtonSolutions">온라인 문의</button>
              </div>
              <div className="info">
                <ul>
                  <li>API</li>
                  <li>구축형</li>
                  <li>기타 추가 기능</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="centerCenter">
          <div className="centerFree">
            <div className="freeTitle">Free</div>
            <div className="freeText">무료</div>
            <button className="freeButton">무료로 시작하기</button>
          </div>
          <div className="centerUl">
            <ul className="freeStyle">
              <div className="firstLi">
                <li className="freeLi">전자계약 3건/월</li>
                <li className="freeLi">클라우드 문서 관리</li>
                <li className="freeLi">다양한 서명·도장</li>
                <li className="freeLi">1:1/1:다 계약</li>
              </div>
              <div className="secondLi">
                <li className="freeLi">접근 암호 인증</li>
                <li className="freeLi">계약 관리</li>
                <li className="freeLi">원격/대면계약</li>
                <li className="freeLi">다수 서명 조건</li>
              </div>
              <div className="thirdLi">
                <li className="freeLi">hwp/pdf/word 등 다양한 문서 지원</li>
                <li className="freeLi">
                  감사 추적 인증서 (서명 주요 진행 정보기록)
                </li>
                <li className="freeLi">
                  상대방 가입 없이 이메일을 통한 서명 입력
                </li>
                <li className="freeLi">
                  클라우드 (Google Drive, Dropbox, One drive) 업로드
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="centerLast">
          <div className="lastNotice">유의사항</div>
          <div className="lastcontent">
            Free·Basic 요금제는 월 마다 건수가 갱신됩니다.
          </div>
          <div className="lastcontent">
            모든 가격은 해당 국가에 적용되는 세금에 따라 달라집니다.
          </div>
        </div>
      </div>
    );
  }
}

export default center;
