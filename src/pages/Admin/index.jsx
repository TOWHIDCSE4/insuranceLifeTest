import React, { useState, useEffect, useRef } from 'react';
import { Checkbox } from 'antd';
import Modal from '../../components/common/Modal'
import "../../assets/scss/Admin/stylesAdmin.scss"
import InputSearch from '../../components/common/InputSearch';
import CreateUser from './CreateUser';
import TableCommon from "../../components/common/TableNormal";
import Pagination from "../../components/common/Pagination";
import ModalConfirm from '../../components/ModalConfirm';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchUser,
  uploadFiles,
  updateUser,
  removeUser,
  removeUserIds,
  resetUserId,
} from '../../slices/userManagement';
import {DEFAULT_SIZE} from "../../ultis/constant";
import {useTranslation} from "react-i18next";

export default function UserManagement() {
  const {t} = useTranslation()
  const dispatch= useDispatch()
  const input_file = useRef(null);
  const {data, totalItem, refreshList}=useSelector((state)=>state.userManagement)
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isCreateUser, setIsCreateUser] = useState(false)
  const [isSettingLog, setIssettingLog] = useState(false)
  const [inputText, setInputText]= useState('')
  const [paginate, setPaginate] = useState({
    limit: DEFAULT_SIZE,
    offset: 1
  });

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
      className:'login-id',
      key: 5,
    },
    {
      title: 'Hỏi đáp',
      align: 'center',
      width: '79px',
      key: 6,
      className: 'checkbox_cell ',
      render: (record) => (
        <Checkbox
          id='qna'
          defaultChecked={record.qna}
          onChange={(e) => handleCheckboxChange(e, record.id, 'qna')}
        />
      ),
    },
    {
      title: 'Thanh toán',
      width: '110px',
      align: 'center',
      key: 7,
      className: 'checkbox_cell',
      render: (record) => (
        <Checkbox
          id='isPaid'
          defaultChecked={record.isPaid}
          onChange={(e ) => handleCheckboxChange(e, record.id, 'isPaid')}
        />
      ),
    },
    {
      title: 'Admin',
      width: '70px',
      align: 'center',
      key: 8,
      className: 'checkbox_cell',
      render: (record) => (
        <Checkbox
          id='isAdmin'
          defaultChecked={record.isAdmin}
          onChange={(e) => handleCheckboxChange(e, record.id, 'isAdmin')}
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
      render: (record) => (
        <Checkbox
          id='idActive'
          defaultChecked={record.isActive}
          onChange={(e) => handleCheckboxChange(e, record.id, 'isActive')}
          disabled
          className='checkbox-disable'
        />
      ),
    },
    {
      title: '',
      dataIndex: '',
      width: '110px',
      key: 10,
      align: 'center',
      render: (record) => (
        <button
          className='btn_reset-user btn-bgWhite-textGreen-borGreen'
          onClick={() => handelResetUser(record.id)}
        >
          Khởi tạo lại
        </button>
      ),
    },
    {
      title: '',
      width: '30px',
      align: 'center',
      key: 11,
      render: (record) => (
        <img
          className='dustbin_icon'
          src='./images/dustbin_icon.svg'
          onClick={() => handleDeleteUser(record)}
        />
      ),
    }
  ];

  const handleDeleteUser = (record) => {
    ModalConfirm({
      title: 'Xác nhận',
      content: `Bạn thực sự muốn xoá tài khoản ${record.loginId}`,
      callApi: () => dispatch(removeUser(record.id)),
    });
  };

  const handleCheckboxChange = (e, id, key) => {
    dispatch(updateUser({id: id, data: {[key]: e.target.checked}}));
  };

  const handelResetUser = (id) => {
    ModalConfirm({
      title: 'Xác nhận',
      content: `Khởi tạo lại sẽ xóa toàn bộ thông tin liên quan đến khách hàng và những việc đã làm với khách hàng.
      Thông tin về tài khoản sẽ  vẫn được giữ lại.`,
      callApi: () => dispatch(resetUserId({ userIds: [id] })),
    });
  };

  const handelResetUsers = () => {
    const listId = selectedRowKeys.map((item) => {
      return item.id
    });

    if (listId.length != 0) {
      ModalConfirm({
        title: 'Xác nhận',
        content: `Khởi tạo lại sẽ xóa toàn bộ thông tin liên quan đến khách hàng và những việc đã làm với khách hàng.
        Thông tin về tài khoản sẽ  vẫn được giữ lại.`,
        callApi: () => dispatch(resetUserId({ userIds: listId })),
      });
    }
  };

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

  const handleDeleteUsers = () => {
    const listId = selectedRowKeys.map((item) => {
      return item.id
    });

    if (listId.length > 0) {
      ModalConfirm({
        title: 'Xác nhận',
        content: `Bạn thức sự muốn xoá ${listId.length} tài khoản không?`,
        callApi: () => dispatch(removeUserIds({ userIds: listId })),
      });
    }
  };

  useEffect(() => {
    input_file.current.style.display = 'none'
    dispatch(searchUser({ q: inputText, page: paginate.offset, limit: paginate.limit }));
  },[inputText, paginate])

  useEffect(()=>{
    if(refreshList){
      dispatch(searchUser({ q: inputText, page: paginate.offset, limit: paginate.limit }));
    }
  },[refreshList])

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
            <img src='./images/import_icon_admin.svg' />
            Import
          </button>
          <button
            className='func_create-user btn-primary'
            onClick={() => setIsCreateUser(true)}
          >
            <img src='./images/plus_icon_admin.svg' />
            Tạo mới
          </button>
          <img
            className='icon_setting'
            src='./images/setting_icon_admin.svg'
            onClick={() => setIssettingLog(!isSettingLog)}
          />
          {isSettingLog && (
            <div className='setting_modal'>
              <div className='watch-log'>
                <img src='./images/clock_icon.svg' />
                <label>Xem log</label>
              </div>
              <div className='change-language'>
                <img src='./images/global_earth_icon.svg' />
                <label>Cập nhật ngôn ngữ</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='content-box container_admin'>
        <div className='admin_title'>
          <h3>Danh sách tài khoản</h3>
          <div className='search_box'>
            <InputSearch setPayload={setInputText} />
          </div>
        </div>
        <TableCommon dataSource={data} columnTable={columns} isSelection={true} setSelectedRowKeys={setSelectedRowKeys} />
        <Pagination total={totalItem} pageSize={paginate.limit} setPaginate={setPaginate}/>
        <Modal isVisible={isCreateUser} setIsVisible={setIsCreateUser} title="Tạo mới nhân sự" width={589} content={ <CreateUser closeCreateUser={setIsCreateUser}/>} />
      </div>
    </>
  );
}
