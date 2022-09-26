import React, { useState, useEffect, useRef } from 'react';
import { Checkbox, Modal } from 'antd';
import "../../assets/scss/Admin/stylesAdmin.scss"
import InputSearch from '../../components/common/InputSearch';
import CreateUser from './CreateUser';
import Table from "../../components/common/TableNormal";
import Pagination from "../../components/common/Pagination";
import ModalConfirm from '../../components/ModalConfirm';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchUser,
  uploadFiles,
  updateUser,
  removeUser,
  removeUserIds,
  retrieveData,
  resetUserId,
} from '../../slices/userManagement';

var handleDeleteUser;
var handleCheckboxChange;
var handelResetUser;

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: '90px',
    className: 'id-user',
    key: 1,
  },
  {
    title: 'Họ và tên',
    width: '180px',
    dataIndex: 'fullname',
    key: 2,
  },
  {
    title: 'Số điện thoại',
    width: '120px',
    dataIndex: 'phone',
    key: 3,
  },
  {
    title: 'Email',
    width: '215px',
    dataIndex: 'email',
    key: 4,
  },
  {
    width: '105px',
    title: 'ID login',
    dataIndex: 'loginId',
    key: 5,
  },
  {
    title: 'Hỏi đáp',
    align: 'center',
    width: '79px',
    dataIndex: 'qna',
    key: 6,
    className: 'checkbox_cell ',
    render: (dataIndex) => (
      <Checkbox
        id='qna'
        defaultChecked={dataIndex}
        onClick={handleCheckboxChange}
      />
    ),
  },
  {
    title: 'Thanh toán',
    dataIndex: 'isPaid',
    width: '110px',
    align: 'center',
    key: 7,
    className: 'checkbox_cell',
    render: (dataIndex) => (
      <Checkbox
        id='isPaid'
        defaultChecked={dataIndex}
        onClick={handleCheckboxChange}
      />
    ),
  },
  {
    title: 'Admin',
    dataIndex: 'isAdmin',
    width: '70px',
    align: 'center',
    key: 8,
    className: 'checkbox_cell',
    render: (dataIndex) => (
      <Checkbox
        id='isAdmin'
        defaultChecked={dataIndex}
        onClick={handleCheckboxChange}
      />
    ),
  },
  {
    title: 'Active',
    dataIndex: 'isActive',
    width: '69px',
    align: 'center',
    key: 9,
    className: 'checkbox_cell',
    render: (dataIndex) => (
      <Checkbox
        id='idActive'
        defaultChecked={dataIndex}
        onClick={handleCheckboxChange}
      />
    ),
  },
  {
    title: '',
    dataIndex: '',
    width: '110px',
    key: 10,
    align: 'center',
    render: () => (
      <button
        className='btn_reset-user btn-bgWhite-textGreen-borGreen'
        onClick={handelResetUser}
      >
        Khởi tạo lại
      </button>
    ),
  },
  {
    title: '',
    dataIndex: '',
    width: '30px',
    align: 'center',
    key: 11,
    render: () => (
      <img
        className='dustbin_icon'
        src='./images/dustbin.svg'
        onClick={handleDeleteUser}
      />
    ),
  },
];

export default function UserManagement() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isCreateUser, setIsCreateUser] = useState(false)
  const [isSettingLog, setIssettingLog] = useState(false)
  const [dataTable, setDataTable]= useState(useSelector((state)=>state.userManagement.data))
  const [inputText, setInputText]= useState('')
  const [pageNum, setPageNum] = useState(10)
  const [current, setCurrent] = useState(1)

  const dispatch= useDispatch()
  const userData=useSelector((state)=>state.userManagement.data)
  const totalItem=useSelector((state)=>state.userManagement.totalItem)
  const getSelectedRowKeys = (rowkeys) => {
    setSelectedRowKeys(rowkeys);
  };

  useEffect(() => {
    input_file.current.style.display = 'none'
    dispatch(retrieveData({page:1,limit:10}))
  },[])

  useEffect(()=>{
    setDataTable(userData)
  },[userData])

  handleDeleteUser = (e) => {
    const rowOfElement = e.target.parentNode.parentNode;
    const userId = rowOfElement.querySelector('.id-user').innerHTML;
    const id = [];
    id.push(userId);
    ModalConfirm({
      title: 'Xác nhận',
      content: `Xoá ID: ${id}`,
      callApi: () => dispatch(removeUser(id)),
    });
  };

  handleCheckboxChange = (e) => {
    const data = e.target.id;
    const rowHover = document.querySelectorAll('.ant-table-cell-row-hover');
    const idCheckboxChange = rowHover[1].innerHTML;
    const itemChange = dataTable.find((item) => item.id === idCheckboxChange);
    console.log(itemChange);
    const dataItem = {
      id: itemChange.id,
      [data]: !itemChange[data],
    };
    dispatch(updateUser(dataItem));
  };

  handelResetUser = (e) => {
    const rowHover = document.querySelectorAll('.ant-table-cell-row-hover');
    const id = [];
    if (rowHover) {
      id.push(rowHover[1].innerHTML);
    }
    ModalConfirm({
      title: 'Xác nhận',
      content: `Khởi tạo lại ID: ${id[0]}`,
      callApi: () => dispatch(resetUserId({ userIds: id })),
    });
  };
  const handelResetUsers = () => {
    const listId = [];
    selectedRowKeys.map((item) => {
      listId.push(item.id);
    });
    if (listId.length != 0) {
      ModalConfirm({
        title: 'Xác nhận',
        content: `Khởi tạo lại ${listId.length} ID?`,
        callApi: () => dispatch(resetUserId({ userIds: listId })),
      });
    }
  };

  const input_file = useRef(null);
  const handleImport = () => {
    input_file.current.click()
    const inputElement = input_file.current
    inputElement.addEventListener("change", handleFiles);

    function handleFiles() {
      const fileList = this.files;
      if (fileList) {
        const formData = new FormData();
        formData.append('file', fileList[0])
        console.log(formData);
        dispatch(uploadFiles(formData))
        // ModalConfirm({title:'Xác nhận',content:`Upload file: ${fileList[0].name}?`,callApi:()=>uploadFiles(formData)})
      }
    }
    removeEventListener('change', handleFiles)
  }

  const handleCreateUser = () => {
    setIsCreateUser(true);
  };

  const closeCreateUser = () => {
    setIsCreateUser(false);
  };
  const handleClickSetting = () => {
    setIssettingLog(!isSettingLog);
  };

  const handleDeleteUsers = () => {
    var listId = [];
    selectedRowKeys.map((item) => {
      listId.push(item.id);
    });
    if (listId.length != 0) {
      ModalConfirm({
        title: 'Xác nhận',
        content: `Xoá ${listId.length} ID?`,
        callApi: () => dispatch(removeUserIds({ userIds: listId })),
      });
    }
  };
  useEffect(() => {
    if (inputText) {
      dispatch(searchUser({ q: inputText, page: current, limit: pageNum }));
    } else {
      dispatch(retrieveData({ q: inputText, page: current, limit: pageNum }));
    }
  },[inputText,pageNum,current])

  // useEffect(() => {
  //   const pageTitle = document.querySelector('.ant-select-selection-item').innerHTML
  //   const pageText = pageTitle.slice(0, 2)
  //   document.querySelector('.ant-select-selection-item').innerHTML = pageText
  // }, [])

  const onPageNumber = (current, page) => {
    setPageNum(page);
    setCurrent(current);
  };

  return (
    <>
      <div className='admin_header'>
        <h3>Admin quản lý khách hàng Manulife</h3>
        <div className='admin_header_func'>
          <button
            className='func_delete-user btn-bgWhite-textGreen-borGreen'
            onClick={handleDeleteUsers}
          >
            Xoá
          </button>
          <button
            className='func_reset-user btn-bgWhite-textGreen-borGreen'
            onClick={handelResetUsers}
          >
            Khởi tạo lại
          </button>
          <input type='file' ref={input_file} />
          <button className='func_import btn-primary' onClick={handleImport}>
            <img src='./images/import_icon.svg' />
            Import
          </button>
          <button
            className='func_create-user btn-primary'
            onClick={handleCreateUser}
          >
            <img src='./images/plus_icon.svg' />
            Tạo mới
          </button>
          <img
            className='icon_setting'
            src='./images/setting_icon.svg'
            onClick={handleClickSetting}
          />
          {isSettingLog ? (
            <div className='setting_modal'>
              <div className='watch-log'>
                <img src='./images/clock.svg' />
                <label>Xem log</label>
              </div>
              <div className='change-language'>
                <img src='./images/global-earth_icon.svg' />
                <label>Cập nhật ngôn ngữ</label>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='content-box container_admin'>
        <div className='admin_title'>
          <h3>Danh sách tài khoản</h3>
          <div className='search_box'>
            <InputSearch setPayload={(e) => setInputText(e)} />
          </div>
        </div>
        <Table dataSource={dataTable} columnTable={columns} isSelection={true} isScroll={true} setSelectedRowKeys={setSelectedRowKeys} />
        <Pagination />
        {isCreateUser &&
          <Modal centered width={589} closable={false}
            footer={null}
            open={isCreateUser}
            onCancel={() => {
              setIsCreateUser(false);
            }}
          >
            <CreateUser closeCreateUser={closeCreateUser} />
          </Modal>
        }
      </div>
    </>
  );
}
