// Inicializamos los pedidos
let orders = [ ... ]

// a. Crear pedido
exports.create = async (req, res) => {
    const newOrder = req.body // Obtenemos la información del pedido desde el cuerpo de la solicitud
    newOrder.id = orders.length + 1 // Asignamos un ID al pedido
    orders.push(newOrder) // Agregamos el pedido a la lista de pedidos

    res.status(201).json({ // Respondemos con un código de estado 201 (Created) y el nuevo pedido
        msg: 'Pedido creado con éxito.',
        data: newOrder,
    })
}

// b. Obtener la lista de pedidos
exports.readAll = async (req, res) => {
    res.json({ // Respondemos con la lista de pedidos
        msg: 'Pedidos obtenidos con éxito.',
        data: orders,
    })
}

// c. Obtener información de un pedido específico
exports.readOne = async (req, res) => {
    const orderId = parseInt(req.params.id) // Obtenemos el ID del pedido desde los parámetros de la ruta
    const order = orders.find((o) => o.id === orderId) // Buscamos el pedido en la lista de pedidos

    if (!order) { // Si no encontramos el pedido, respondemos con un código de estado 404 (Not Found)
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    res.json({ // Si encontramos el pedido, respondemos con el pedido
        msg: 'Pedido obtenido con éxito.',
        data: order,
    })
}

// d. Actualizar información de un pedido específico
exports.update = async (req, res) => {
    const orderId = parseInt(req.params.id) // Obtenemos el ID del pedido desde los parámetros de la ruta
    const orderIndex = orders.findIndex((o) => o.id === orderId) // Buscamos el índice del pedido en la lista de pedidos

    if (orderIndex === -1) { // Si no encontramos el pedido, respondemos con un código de estado 404 (Not Found)
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    orders[orderIndex] = { ...orders[orderIndex], ...req.body } // Actualizamos el pedido con la información del cuerpo de la solicitud

    res.json({ // Respondemos con el pedido actualizado
        msg: 'Pedido actualizado con éxito.',
        data: orders[orderIndex],
    })
}

// e. Eliminar un pedido específico
exports.delete = async (req, res) => {
    const orderId = parseInt(req.params.id) // Obtenemos el ID del pedido desde los parámetros de la ruta
    const orderIndex = orders.findIndex((o) => o.id === orderId) // Buscamos el índice del pedido en la lista de pedidos

    if (orderIndex === -1) { // Si no encontramos el pedido, respondemos con un código de estado 404 (Not Found)
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    orders.splice(orderIndex, 1) // Eliminamos el pedido de la lista de pedidos
    res.json({ msg: 'Pedido eliminado con éxito.' }) // Respondemos con un mensaje de éxito
}

// f-j. Filtros
exports.filter = async (req, res) => {
    const { name, restaurant, date, status } = req.query
    // Obtenemos los posibles filtros desde la cadena de consulta de la URL

    // Filtramos la lista de pedidos según los criterios proporcionados
    const filteredOrders = orders.filter((order) => {
        if (name && order.name !== name) { // Si se proporcionó un nombre y no coincide con el del pedido, descartamos el pedido
            return false
        }
        if (restaurant && order.restaurant !== restaurant) { // Si se proporcionó un restaurante y no coincide con el del pedido, descartamos el pedido
            return false
        }
        if (date && order.date !== date) { // Si se proporcionó una fecha y no coincide con la del pedido, descartamos el pedido
            return false
        }
        if (status && order.status !== status) { // Si se proporcionó un estado y no coincide con el del pedido, descartamos el pedido
            return false
        }
        return true // Si todos los criterios coinciden, conservamos el pedido
    })

    if (filteredOrders.length === 0) { // Si no encontramos pedidos que coincidan, respondemos con un código de estado 404 (Not Found)
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    res.json({ // Si encontramos pedidos que coincidan, respondemos con los pedidos
        msg: 'Pedidos filtrados con éxito.',
        data: filteredOrders,
    })
}

