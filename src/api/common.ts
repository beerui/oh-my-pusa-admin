import { request } from '@/utils/request';

export function staffLogin(userInfo: Record<string, unknown>) {
  return request.post<string>({
    url: '/staff/login',
    data: userInfo,
  });
}

export function staffLogout() {
  return request.get({
    url: '/staff/logout',
  });
}

export function uploadFile(file) {
  return request.post({
    url: 'https://file.beer-ui.com/file-api/file/upload',
    headers: { 'Content-Type': 'multipart/form-data;charset=UTF-8' },
    data: file,
  });
}
