import styled from 'styled-components'

export const HomeWrapper = styled.div  `
    overflow: hidden;
    width: 960px;
    margin: 0 auto;    
`;

export const HomeLeft = styled.div  `
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;  
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div  `
    width: 240px;
    float: right;
    
`;

export const TopicWrapper = styled.div  `
    padding: 20px 0 10px 0;
    background: red;
    border-bottom: 1px solid #dcdcdc;
    
`;

export const ListItem = styled.div  `
    overflow: hidden;
    padding: 20px 0 ;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div  `
    width: 500px;
    float：left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div `
    margin: 30px;
    width: 280px;
`;

export const RecommendItem = styled.div `
    height: 50px;
    width: 280px;
    background: url(${(props) => props.imgUrl  });
    background-size: contain;
`;

export const WriterWrapper = styled.div `
    width: 250px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align:center;
`;

export const WriterItem = styled.div `
    height: 50px;
    width: 280px;
    background: url(${(props) => props.imgUrl  });
    background-size: contain;
`;

export const LoadMore = styled.div `
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;  
    cursor: pointer;
    
`;

export const BackTop = styled.div `
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`;