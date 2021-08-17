import data from './data.js'
const $ = document.querySelector.bind(document);

const app = (() => {
    const root = $('#root')
    const btn = $('.submit')
    const input = $('#input')
    return {

        add(name, isChecked) {
            data.push({ name, isChecked })
        },
        delete(index) {
            data.splice(index, 1)
        },
        update(index, name) {
            data[index].name = name
        },
        render() {
            
            const html = data.map((item, index) =>
                `<li class="item">
                    <div class="info">
                        <input type="checkbox" ${item.isChecked && 'checked'} >${item.name}
                    </div>
                    <div class="actions">
                        <i class="fas fa-trash-alt delete" data-index="${index}"></i>
                        <i class="far fa-edit update-btn" data-index="${index}"></i>
                    </div>
                    <div class="update-form" >
                        <input type="text" class="update-value">
                        <button class="update-submit" data-index="${index}">Update</button>
                    </div>
                </li>`).join('')
            root.innerHTML = html
        },
        handleAdd() {
            btn.addEventListener('click', () => {
                this.add(input.value, false)
                this.render()
                input.value = null
                input.focus()
            })
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delete')
            if (deleteBtn) {
                const i = deleteBtn.dataset.index
                this.delete(i)
                this.render()
            }
        },
        handleUpdate(e) {

            const updateBtn = e.target.closest('.update-btn')
            const updateForm = document.getElementsByClassName('update-form')
            const updateSubmit = e.target.closest('.update-submit')
            let updateValue = document.getElementsByClassName('update-value')
            if (updateBtn) {
                const i = updateBtn.dataset.index
                updateForm[i].classList.toggle('toggle-update')
            }
            if (updateSubmit) {
                const i = updateSubmit.dataset.index
                this.update(i, updateValue[i].value)
                this.render()
            }
        },
        init() {
            this.render()
            this.handleAdd()
            root.addEventListener('click', this.handleDelete.bind(this))
            root.addEventListener('click', this.handleUpdate.bind(this))
        }
    }
})();
app.init();
