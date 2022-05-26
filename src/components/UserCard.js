import { useState } from 'react'
import { Card, Modal, Form, Input } from 'antd'
import {
  HeartOutlined,
  EditOutlined,
  DeleteFilled,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartFilled,
} from '@ant-design/icons'

const UserCard = ({ user, deleteUser, updateUser }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    form.validateFields().then((values) => {
      updateUser(user.id, values)
      setIsModalVisible(false)
    })
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Card
        style={{ margin: 15 }}
        cover={
          <div
            style={{
              backgroundColor: '#F5F5F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
              alt='avatar'
              style={{ width: 200, height: 200 }}
            />
          </div>
        }
        actions={[
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? (
              <HeartFilled style={{ color: 'red', fontSize: 20 }} />
            ) : (
              <HeartOutlined style={{ color: 'red', fontSize: 20 }} />
            )}
          </button>,
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => showModal()}
          >
            <EditOutlined style={{ fontSize: 20 }} />
          </button>,
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => deleteUser(user.id)}
          >
            <DeleteFilled style={{ fontSize: 20 }} />
          </button>,
        ]}
      >
        <h3>{user.name}</h3>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <MailOutlined style={{ fontSize: '18px' }} />
          <p style={{ marginLeft: 5 }}>{user.email}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <PhoneOutlined style={{ fontSize: '18px' }} />
          <p style={{ marginLeft: 5 }}>{user.phone}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <GlobalOutlined style={{ fontSize: '18px' }} />
          <p style={{ marginLeft: 5 }}>http://{user.website}</p>
        </div>
      </Card>
      <Modal
        title='Basic Modal'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete='off'
          form={form}
        >
          <Form.Item
            label='Name'
            name='name'
            initialValue={user.name}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            rules={[
              { required: true },
              { type: 'email', message: 'Invalid email' },
            ]}
            initialValue={user.email}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Phone'
            name='phone'
            rules={[{ required: true }]}
            initialValue={user.phone}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Website'
            name='website'
            rules={[{ required: true }]}
            initialValue={user.website}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default UserCard
