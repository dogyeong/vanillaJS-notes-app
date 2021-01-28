export const list = (notes) => `
  <ul class="note-list">
    ${notes
      .map(
        (note) => `
        <li>
          <button class='detail' data-id=${note.id}>
            <span class="list-title">${note.title}</span>
            ${note.updatedAt.replace('.', '년').replace('.', '월').replace('.', '일')}
          </button>
        </li>
        `,
      )
      .join('')}
  </ul>
  <button type="button" class="add-btn">새 노트 추가</button>
`;

export const addPage = (id) => `
  <input type="text" class="note-title" placeholder="제목" />
  <textarea class="note-text" placeholder="내용" rows="5"></textarea>
  <button class="save-btn" data-id="${id}">추가</button>
  <button class="cancel-btn">취소</button>
`;

export const detailPage = (notes) => `
  <div class="note-detail">
    <h3>${notes.title}</h3>
    <p>${notes.text}</p>
  </div>
  <button class="cancel-btn">목록으로</button>
  <button class="edit-btn" data-id="${notes.id}">수정</button>
  <button class="del-btn" data-id="${notes.id}">삭제</button>
`;

export const editPage = (note) => `
  <input type="text" class="note-title" placeholder="제목" value="${note.title}" />
  <textarea class="note-text" placeholder="내용" rows="5">${note.text}</textarea>
  <button class="save-btn" data-id="${note.id}">수정</button>
  <button class="cancel-btn">취소</button>
`;
